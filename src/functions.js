export function getNumber({
  id = '',
}) {
  return id.slice(1);
}

export function CreateChilds({
} = {}
) {
  let id = 0;

  return run;

  function genNextItemId({
  } = {}
  ) 
  {
    id += 1;
    const zeroCnt = 3;
    const indUpd = `j${'0'.repeat(zeroCnt - id.toString(10).length)}${id}`;
    return indUpd;
  }

  function run({
    items = [],
  }) {
    const res = [];
    items.forEach((
      item,
    ) => {
      const itemId = genNextItemId();
      res.push({
        src: item,
        id: itemId,
      });
    });
    return res;
  }
}