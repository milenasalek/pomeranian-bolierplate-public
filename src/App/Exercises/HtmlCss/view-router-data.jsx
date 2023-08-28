import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { htmlCssblockRouterMetaData } from './SelectorsAndCascade/router-data';

export const blockRouterMetaData = [htmlCssblockRouterMetaData];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
