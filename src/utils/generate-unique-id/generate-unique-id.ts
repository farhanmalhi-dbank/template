let idCounter = 0;

export const generateUniqueId = () => {
  const timestamp = Date.now();
  const performanceNow = performance.now();
  const id = `${timestamp}-${performanceNow}-${idCounter}`;
  idCounter++;
  return id;
};
