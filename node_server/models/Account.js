import * as mongoose from 'mongoose';
import { AccountSchema } from '../schemas/account.schema.js';

export const Accounts = mongoose.model('Accounts', AccountSchema);
