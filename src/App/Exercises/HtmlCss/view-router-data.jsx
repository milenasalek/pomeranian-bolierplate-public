import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { htmlCssRouterMetaData } from './SelectorsAndCascade/router-data';
import { textFundamentsRouterMetaData } from './TextFundaments/router-data';
import { standardTagsRouterMetaData } from './StandardTags/router-data';
import { ColorsRouterMetaData } from './Colors/router-data';
import { ImageFilesRouterMetaData } from './ImageFiles/router-data';
import { BackgroundsRouterMetaData } from './Backgrounds/router-data';
import { blockRouterMetaData as MediaFilesMetaData } from './MediaFiles/router-data';

export const blockRouterMetaData = [
  htmlCssRouterMetaData,
  textFundamentsRouterMetaData,
  standardTagsRouterMetaData,
  ColorsRouterMetaData,
  ImageFilesRouterMetaData,
  BackgroundsRouterMetaData,
  MediaFilesMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
