export const getFunFact = async (num: number) => {
  try {
    var numType = "";
    if (num % 2 === 0) {
      numType = "even";
    } else {
      numType = "odd";
    }
    const api = `http://numbersapi.com/${num}/math`;
    const response = await fetch(api);
    const data = await response.text();
    if (data.includes("armstrong")) {
      return { data: data, properties: ["armstrong", numType] };
    }
    return { data: data, properties: [numType] };
  } catch (e) {
    return "No Fun Fact Available";
  }
};
