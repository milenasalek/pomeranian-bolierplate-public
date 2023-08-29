import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { htmlCssblockRouterMetaData } from './SelectorsAndCascade/router-data';
import { htmTextFundamentsRouterMetaData } from './TextFundaments/router-data';

export const blockRouterMetaData = [
  htmlCssblockRouterMetaData,
  htmTextFundamentsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
