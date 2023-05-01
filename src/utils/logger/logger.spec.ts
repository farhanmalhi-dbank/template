import { logger as myLogger } from './logger';

describe('Logger', () => {
  it('should call the logger methods successfully', async () => {
    const message = 'This is message';
    const mockLogFn = jest.spyOn(myLogger, 'log').mockImplementationOnce(jest.fn);
    const mockWarnFn = jest.spyOn(myLogger, 'warn').mockImplementationOnce(jest.fn);
    const mockErrorFn = jest.spyOn(myLogger, 'error').mockImplementationOnce(jest.fn);
    await myLogger.log(message);
    expect(myLogger.log).toBeDefined();
    await myLogger.log(message);
    expect(myLogger.log).toBeDefined();
    expect(mockLogFn).toHaveBeenCalledWith(message);

    await myLogger.warn(message);
    expect(myLogger.warn).toBeDefined();
    expect(mockWarnFn).toHaveBeenCalledWith(message);
    await myLogger.error(message);
    expect(myLogger.error).toBeDefined();
    expect(mockErrorFn).toHaveBeenCalledWith(message);
    mockLogFn.mockRestore();
  });
});
