import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AccountSchema = new Schema({
    username: {
        type: String,
        required: 'Enter a name',
    },
    password: {
        type: String,
        required: 'Enter a password',
    },
});
