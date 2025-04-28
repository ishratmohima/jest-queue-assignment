const Queue = require('../src/Queue');

describe('Queue operations', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('Constructor initializes empty queue', () => {
    expect(queue.length()).toBe(0);
    expect(queue.isEmpty()).toBeTruthy();
  });

  test('enqueue adds items', () => {
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    expect(queue.length()).toBe(1);
    expect(queue.isEmpty()).toBeFalsy();
  });

  test('dequeue removes and returns items', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.peek()).toBe(2);
    expect(queue.length()).toBe(1);
  });

  test('peek returns first item without removing', () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
    expect(queue.length()).toBe(1);
  });

  test('length returns correct number of items', () => {
    expect(queue.length()).toBe(0);
    queue.enqueue(1);
    expect(queue.length()).toBe(1);
    queue.enqueue(2);
    expect(queue.length()).toBe(2);
  });

  test('isEmpty returns true only when queue is empty', () => {
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue(5);
    expect(queue.isEmpty()).toBeFalsy();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  });

  test('removeAll clears the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.removeAll();
    expect(queue.length()).toBe(0);
    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.peek()).toBeUndefined();
  });

  // ✅ Extra test to achieve 100% branch coverage (Task 1)
  test('dequeue returns undefined when empty (current buggy behavior)', () => {
    expect(queue.dequeue()).toBeUndefined();
  });

  // ❌ Failing test for Task 2 (expected failure)
  test('dequeue throws error when empty', () => {
    expect(() => queue.dequeue()).toThrow('Queue is empty');
  });
});
