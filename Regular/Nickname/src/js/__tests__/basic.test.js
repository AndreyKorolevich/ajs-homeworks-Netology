import {Validator} from '../app';

test('should validate', () => {
  const result = Validator.validateUsername('sfd_345-34-345sdf');

  expect(result).toBe(true);
});

test('should validate', () => {
  const result = Validator.validateUsername('sfddfg');

  expect(result).toBe(true);
});

test('should validate', () => {
  const result = Validator.validateUsername('sfd_345');

  expect(result).toBe(false);
});

test('should validate', () => {
  const result = Validator.validateUsername('345-34-345sdf');

  expect(result).toBe(false);
});

test('should validate', () => {
  const result = Validator.validateUsername('_dfg345-34-345sdf');

  expect(result).toBe(false);
});

test('should validate', () => {
  const result = Validator.validateUsername('-fgh345-34-345sdf');

  expect(result).toBe(false);
});

test('should validate', () => {
  const result = Validator.validateUsername('sfd_3545-34-345sdf');

  expect(result).toBe(false);
});

test('should validate', () => {
  const result = Validator.validateUsername('sfd_3545-34-');

  expect(result).toBe(false);
});

test('should validate', () => {
  const result = Validator.validateUsername('sfd_');

  expect(result).toBe(false);
});
