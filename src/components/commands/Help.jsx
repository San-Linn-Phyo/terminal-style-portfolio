const commands = [
  {
    cmd: "help",
    desc: "To show this.",
  },
  {
    cmd: "clear",
    desc: "To clear the terminal.",
  },
  {
    cmd: "echo",
    desc: "To output your desired thing.",
  },
  {
    cmd: "whois",
    desc: "To know better about me.",
  },
  {
    cmd: "whoami",
    desc: "To know who you are.",
  },
  {
    cmd: "gui",
    desc: "To open the GUI version of my portfolio",
  },
  {
    cmd: "projects",
    desc: "To know the projects that I had worked.",
  },
  {
    cmd: "blog",
    desc: "To visit the blog website where I wrote things about technical stuffs.",
  },
  {
    cmd: "exit",
    desc: "To close the current browser tab.",
  },
];

export default function Help() {
  return (
    <div>
      <h3>Thank you for interesting in my work.</h3>
      <p>Here is a list of commands that you can use: </p>
      <ul className="grid gap-2">
        {commands.map((command) => {
          return (
            <li key={command.cmd}>
              <code>{command.cmd}</code>
              <br className="md:hidden" />
              <span>-</span>
              <span>{command.desc}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
