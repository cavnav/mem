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
      src,
    ) => {
      const itemId = genNextItemId();
      res.push({
        src,
        id: itemId,
        title: getTitle({ src })
      });
    });
    return res;
  }
}

export function addTitle({
  items = [],
}) {
  items.forEach((item) => {
    item.items.forEach((itemId) => {
      if (item[itemId].src) {
        item[itemId].title = getTitle({ src: item[itemId].src });
      }
    })
  });  
}

function getTitle({
  src,
}) {
  return src.slice(src.lastIndexOf('/') + 1).split('.')[0];
}