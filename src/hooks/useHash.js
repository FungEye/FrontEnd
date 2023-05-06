const useHash = (string) => {
  //source: https://www.educba.com/javascript-hash/
  function toHash() {
    let hash = 0;
    if (string.length === 0) return hash;
    for (let i = 0; i < string.length; i++) {
      let ch = string.charCodeAt(i);
      hash = (hash << 5) - hash + ch;
      hash = hash & hash;
    }
    return hash;
  }

  return toHash;
};

export default useHash;
