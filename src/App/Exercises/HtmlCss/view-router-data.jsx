import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { htmlCssRouterMetaData } from './SelectorsAndCascade/router-data';
import { textFundamentsRouterMetaData } from './TextFundaments/router-data';
import { standardTagsRouterMetaData } from './StandardTags/router-data';
import { ColorsRouterMetaData } from './Colors/router-data';
import { ImageFilesRouterMetaData } from './ImageFiles/router-data';
import { MediaFilesRouterMetaData } from './MediaFiles/router-data';

export const blockRouterMetaData = [
  htmlCssRouterMetaData,
  textFundamentsRouterMetaData,
  standardTagsRouterMetaData,
  ColorsRouterMetaData,
  ImageFilesRouterMetaData,
  MediaFilesRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
