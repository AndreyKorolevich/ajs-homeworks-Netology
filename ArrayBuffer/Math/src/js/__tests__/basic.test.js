import {Daemon, Magician} from "../app";

test('should Magician get stoned', () => {
  const magician = new Magician(false, 100);
  const result = magician.stonedM;
  expect(result).toBe(false);
});

test('should Magician get attack', () => {
  const magician = new Magician(false, 100);
  const result = magician.attackM;
  expect(result).toBe(100);
});

test('should Magician set stoned', () => {
  const magician = new Magician(false, 100);
  magician.stonedM = true;
  expect(magician.stonedM).toBe(true);
});

test('should Magician set attack', () => {
  const magician = new Magician(false, 100);
  magician.attackM = 3;
  const result = magician.attackM;
  expect(result).toBe(80);
});

test('should Magician set attack', () => {
  const magician = new Magician(true, 100);
  magician.attackM = 2;
  expect(magician.attackM ).toBe(85);
});

test('should Daemon get stoned', () => {
  const daemon = new Daemon(false, 100);
  const result = daemon.stonedM;
  expect(result).toBe(false);
});

test('should Daemon get attack', () => {
  const daemon = new Daemon(false, 100);
  const result = daemon.attackM;
  expect(result).toBe(100);
});

test('should Daemon set stoned', () => {
  const daemon = new Daemon(false, 100);
  daemon.stonedM = true;
  expect(daemon.stonedM).toBe(true);
});

test('should Daemon set attack', () => {
  const daemon = new Daemon(false, 100);
  daemon.attackM = 3;
  const result = daemon.attackM;
  expect(result).toBe(80);
});

test('should Daemon set attack', () => {
  const daemon = new Daemon(true, 100);
  daemon.attackM = 2;
  expect(daemon.attackM ).toBe(85);
});

