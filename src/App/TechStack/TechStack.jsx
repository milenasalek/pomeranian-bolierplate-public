import './styles.css';
import html from './html.svg';
import githuub from './githuub.svg';

export const TechStack = () => {
  return (
    <div id="container">
      <div id="first">
        <img src={html} alt="htmlIcon" />
        <span>css</span>
      </div>
      <div id="second">
        <span>html</span>
      </div>
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
        <img src={githuub} alt="githuubIcon" />
        <span>github</span>
      </div>
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
