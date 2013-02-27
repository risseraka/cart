function cart(arr) {
  return arr.reduce(

  function (result, el) {
    if (el instanceof Array) {
      result = el.reduce(

      function (newRes, el) {
        return newRes.concat(
        result.map(

        function (sub) {
          sub = sub.slice();
          sub.push(el);
          return sub;
        }));
      }, []);
    } else {
      result.forEach(

      function (sub) {
        sub.push(el);
      });
    }
    return result;
  }, [
    []
  ]);
}

//cart([1, 2, 3, [4, 5]])
