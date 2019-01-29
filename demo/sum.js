export default function(...args) {
  return args.reduce((acc, v) => acc + v, 0);
}
