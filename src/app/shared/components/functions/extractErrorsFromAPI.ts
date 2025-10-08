export function extractErrors(object: any): string[] {
  const error = object.console.error.errors;

  let errorMessages: string[] = [];

  for (let key in error) {
    let field = key;
    const fieldMessages = error[key].map((message: string) =>
      `${field}:${message}`);
    errorMessages = errorMessages.concat(fieldMessages)
  }
  return errorMessages;
}