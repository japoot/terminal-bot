import SYSTEM_RESPONSES, { systemReponses } from "../data/system_responses";

// Return array of [status, system response]
export default function processCommand(
  cmd: keyof systemReponses,
): [number, string] {
  // FIXME: santize user input
  let status = 0;
  let response = '';

  // FIXME: "mkdir Downloads" is not being found, look into how to handle cmd with mixed casing
  if (cmd in SYSTEM_RESPONSES) {
    status = SYSTEM_RESPONSES[cmd].status;
    response = SYSTEM_RESPONSES[cmd].result.join(' ');
  } else {
    status = 0;
    response = "Sorry, I don't understand.";
  }

  return [status, response];
}
