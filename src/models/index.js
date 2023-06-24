// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AgendarConsultoria } = initSchema(schema);

export {
  AgendarConsultoria
};