// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ContentStatus = {
  "PUBLISHED": "PUBLISHED",
  "UNPUBLISHED": "UNPUBLISHED",
  "EXPIRED": "EXPIRED"
};

const { AgendarConsultoria, Contents, Resources, Categories, MenuItem, SubMenu } = initSchema(schema);

export {
  AgendarConsultoria,
  Contents,
  Resources,
  Categories,
  MenuItem,
  SubMenu,
  ContentStatus
};