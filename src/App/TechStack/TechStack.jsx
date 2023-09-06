import './styles.css';
import { htmlSvg } from '../Images/tech-stack/html';
import { githuubSvg } from '../Images/tech-stack/githuub';

export const TechStack = () => {
  return (
    <div id="container">
      <div id="first">
        <span>css</span>
      </div>
      <div id="second">
        <span>html</span>
      </div>
      <htmlSvg />
      <div id="third">
        <span>typescript</span>
      </div>
      <div id="fourth">
        <span>javascript</span>
      </div>
      <div id="fifth">
        <span>react</span>
      </div>
      <div id="sixth">
        <span>github</span>
      </div>
      <githuubSvg />
      <div id="seventh">
        <span>bitbucket</span>
      </div>
      <div id="eighth">
        <span>jest</span>
      </div>
      <div id="nineth">
        <span>firebase</span>
      </div>
      <div id="tenth">
        <span>redux</span>
      </div>
      <div id="eleventh">
        <span>git</span>
      </div>
      <div id="twelveth">
        <span>vscode</span>
      </div>
      <div id="thirteenth">
        <span>discord</span>
      </div>
      <div id="fourteenth">
        <span>jira</span>
      </div>
      <div id="fifteenth">
        <span>readmine</span>
      </div>
    </div>
  );
};
