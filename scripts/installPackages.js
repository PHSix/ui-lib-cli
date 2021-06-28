import { spawn } from 'child_process';
function npmExec(cmd) {
  return new Promise((resolve) => {
    let pid = spawn('sh', ['-c', cmd], { stdio: 'inherit' });
    pid.on("close", () =>{
      resolve()
    })
  });
}

export default async function (packages) {
  let command = 'yarn add ';
  for (let item of packages.value) {
    command += ` ${item}`;
  }
  await npmExec(command);
}
