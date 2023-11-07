import PropTypes from "prop-types";
import TerminalInfo from "./TerminalInfo.jsx";
import Help from "./commands/Help.jsx";
import NotFound from "./commands/NotFound.jsx";
import Echo from "./commands/Echo.jsx";
import WhoAmI from "./commands/WhoAmI.jsx";
import WhoIs from "./commands/WhoIs.jsx";
import GUI from "./commands/GUI.jsx";
import Projects from "./commands/Projects.jsx";
import Blog from "./commands/Blog.jsx";
import Exit from "./commands/Exit.jsx";

function foundCommand(command) {
  let result = undefined;
  console.log("command: ", command);
  switch (command.split(" ")[0]) {
    case "help":
      result = <Help />;
      break;

    case "echo":
      result = <Echo command={command} />;
      break;

    case "whoami":
      result = <WhoAmI />;
      break;

    case "whois":
      result = <WhoIs />;
      break;

    case "gui":
      result = <GUI />;
      break;

    case "projects":
      result = <Projects />;
      break;

    case "blog":
      result = <Blog />;
      break;

    case "exit":
      result = <Exit />;
      break;

    case "":
      result = "";
      break;
  }

  return result;
}

export default function CommandsOutput({ history }) {
  return (
    <div>
      {history.map((command, index) => {
        return (
          <div key={index} className="mt-4">
            <div className="mb-2">
              <TerminalInfo />
              <div className="flex gap-2">
                <span className="code-color">&#11166;</span>

                <span>{command}</span>
              </div>
            </div>

            {foundCommand(command) ?? <NotFound command={command} />}
          </div>
        );
      })}
    </div>
  );
}

CommandsOutput.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
};
