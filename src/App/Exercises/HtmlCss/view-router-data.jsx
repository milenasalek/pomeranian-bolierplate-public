import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { htmlCssRouterMetaData } from './SelectorsAndCascade/router-data';
import { textFundamentsRouterMetaData } from './TextFundaments/router-data';
import { standardTagsRouterMetaData } from './StandardTags/router-data';
import { CssAnimationsRouterMetaData } from './CssAnimations/router-data';
import { ColorsRouterMetaData } from './Colors/router-data';

export const blockRouterMetaData = [
  htmlCssRouterMetaData,
  textFundamentsRouterMetaData,
  standardTagsRouterMetaData,
  CssAnimationsRouterMetaData,
  ColorsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
