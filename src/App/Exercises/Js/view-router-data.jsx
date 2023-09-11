import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { BooleanRouterMetaData } from './Boolean/router-data';
import { JsNumbersRouterMetaData } from './JsNumbers/router-data';
import {
  MathExerciseRouterMetaData,
  MathRouterMetaData,
} from './Math/router-data';
import { JsNumbersTrainingRouterMetaData } from './JsNumbersTraining/router-data';
import { EmptyValuesAndCommentsRouterMetaData } from './EmptyValuesAndComments/router-data';
import { JsStringCodingRouterMetaData } from './JsStringCoding/router-data';
import { JsStringTrainingRouterMetaData } from './JsStringTraining/router-data';
import { JsStringConversionRouterMetaData } from './JsStringConversion/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  BooleanRouterMetaData,
  JsNumbersRouterMetaData,
  MathExerciseRouterMetaData,
  JsNumbersTrainingRouterMetaData,
  EmptyValuesAndCommentsRouterMetaData,
  JsStringCodingRouterMetaData,
  JsStringTrainingRouterMetaData,
  JsStringConversionRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
