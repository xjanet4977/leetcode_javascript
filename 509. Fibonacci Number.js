var fib = function(N, mem = [0, 1]) {
  if (N === 0) return 0;
  if (mem[N]) return mem[N];
  mem[N] = fib(N - 1, mem) + fib(N - 2, mem);
  return mem[N];

};