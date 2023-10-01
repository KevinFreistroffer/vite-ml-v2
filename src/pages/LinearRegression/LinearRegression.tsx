import { Divider, FormControl } from '@mui/material';
import PageLayout from '../../components/PageLayout';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import './styles.scss';
import Button from '@mui/material/Button';
import { ButtonsContainer, Caption } from './styled';

enum EVariableType {
    SingleVariable = 'Single Variable',
    MultiVariable = 'Multi Variable',
}

export interface IVariableType {
    variableType: EVariableType;
}

export const LinearRegression = (): JSX.Element => {
    const [variableType, setVariableType] = useState<EVariableType>();

    const [columnNames, setColumNames] = useState<string[] | null>(null);

    const [file, setFile] = useState<File | null>(null);

    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            const data = reader.result;
            console.log(data);
        };
        if (file) {
            setFile(file);
        }
    };

    // create a function that tensorflow can use to read the csv file
    const readFile = async () => {
        try {
            if (file) {
                console.log(file, typeof file);
                const url = URL.createObjectURL(file);
                const csvDataset = tf.data.csv(url);
                const columnNames = await csvDataset.columnNames();

                if (!columnNames) {
                    // throw an error
                }

                setColumNames(columnNames);
            }
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <PageLayout justifyContent="flex-start" id="linear-regression-page" data-testid="linear-regression-page">
            <div id="container">
                <Typography
                    sx={{
                        padding: '1rem 0',
                        fontWeight: 'bold',
                    }}
                    variant="h1"
                >
                    Linear Regression
                </Typography>
                <Caption>
                    Select whether the CSV you&apos;ll upload is predicting from 1 variable, or multiple variables.
                    <Divider />
                </Caption>

                <div id="form-container">
                    <FormControl>
                        <Typography variant="h2" sx={{ marginBottom: '2rem' }}>
                            Is this single or multi variable?
                        </Typography>

                        <Button>What does this mean?</Button>

                        <ButtonsContainer id="buttons-container">
                            <Button
                                size="large"
                                variant="outlined"
                                sx={{ mr: 1 }}
                                color="secondary"
                                onClick={() => {
                                    setVariableType(EVariableType.SingleVariable);
                                }}
                            >
                                Single
                            </Button>
                            <Button
                                size="large"
                                variant="outlined"
                                sx={{ mr: 1 }}
                                onClick={() => {
                                    setVariableType(EVariableType.MultiVariable);
                                }}
                            >
                                Multiple
                            </Button>
                        </ButtonsContainer>
                    </FormControl>
                    <div>{columnNames?.length}</div>
                    {variableType ? (
                        <div>
                            <Typography variant="h2">Upload your data</Typography>
                            <form id="form">
                                <label htmlFor=""></label>
                                <input type="file" name="" id="" placeholder="Upload file" accept=".csv" onChange={handleUpload} />
                            </form>
                        </div>
                    ) : null}
                </div>

                {/* <div>
          <Typography
            sx={{
              padding: "1rem 2rem",
            }}
            variant="h4"
          >
            Column Names
          </Typography>
          <ul>
            {columnNames?.map((columnName) => (
              <li>{columnName}</li>
            ))}
          </ul>
        </div> */}
                <button
                    onClick={readFile}
                    style={{
                        position: 'fixed',
                        top: '1rem',
                        left: '1rem',
                        background: 'black',
                        color: 'white',
                    }}
                >
                    Read CSV
                </button>
            </div>
        </PageLayout>
    );
};
