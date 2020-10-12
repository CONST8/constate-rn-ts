// this method checks if the uuid is in a valid format
function uuidValidator(uuid: string): boolean {
  const reg = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (reg.test(uuid) === true) {
    return true;
  }
  return false;
}

export default uuidValidator;
