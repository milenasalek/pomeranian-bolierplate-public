import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { htmlCssRouterMetaData } from './SelectorsAndCascade/router-data';
import { textFundamentsRouterMetaData } from './TextFundaments/router-data';
import { standardTagsRouterMetaData } from './StandardTags/router-data';
import { ColorsRouterMetaData } from './Colors/router-data';
import { ImageFilesRouterMetaData } from './ImageFiles/router-data';
import { MediaFilesRouterMetaData } from './MediaFiles/router-data';
import { BoxModelRouterMetaData } from './BoxModel/router-data';
import { HTMLTablesRouterMetaData } from './HTMLTables/router-data';
import { ArrayRenderingRouterMetaData } from './ArrayRendering/router-data';
import { FloatsAndPositioningRouterMetaData } from './FloatsAndPositioning/router-data';
import { RWDRouterMetaData } from './RWD/router-data';

export const blockRouterMetaData = [
  htmlCssRouterMetaData,
  textFundamentsRouterMetaData,
  standardTagsRouterMetaData,
  ColorsRouterMetaData,
  ImageFilesRouterMetaData,
  MediaFilesRouterMetaData,
  BoxModelRouterMetaData,
  HTMLTablesRouterMetaData,
  ArrayRenderingRouterMetaData,
  FloatsAndPositioningRouterMetaData,
  RWDRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
