import ErrorRepository from '../app';

test('should text error', () => {
  const errorRepository = new ErrorRepository([403, 'Error1'], [404, 'Error2']);
  const result = errorRepository.translate(403);

  expect(result).toBe('Error1');
});

test('should Error', () => {
  const errorRepository = new ErrorRepository([403, 'Error1'], [404, 'Error2']);
  const result = errorRepository.translate(405);

  expect(result).toBe('Unknown error');
});
