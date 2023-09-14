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
import { JsArrayBasicsRouterMetaData } from './JsArrayBasics/router-data';
import { JsArrayMethodsExerciseRouterMetaData } from './JsArrayMethodsExercise/router-data';
import { ObjectsRouterMetaData } from './Objects/router-data';
import { DateAndTimeRouterMetaData } from './DateAndTime/router-data';
import { JsFunctionBasicsRouterMetaData } from './JsFunctionBasics/router-data';
import { SetTimeoutRouterMetaData } from './SetTimeout/router-data';
import { AnimationsJsRouterMetaData } from './AnimationsJs/router-data';

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
  JsArrayBasicsRouterMetaData,
  JsArrayMethodsExerciseRouterMetaData,
  ObjectsRouterMetaData,
  DateAndTimeRouterMetaData,
  JsFunctionBasicsRouterMetaData,
  SetTimeoutRouterMetaData,
  AnimationsJsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
