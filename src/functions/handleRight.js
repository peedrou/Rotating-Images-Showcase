const handleRight = () => {
  const totalGroups = document.querySelectorAll("div[data-status]");
  const previousGroup = document.querySelector('[data-status="previous"]');
  const currentGroup = document.querySelector('[data-status="active"]');
  const nextGroupBefore = document.querySelector('[data-status="next"]');
  const firstGroup = document.querySelector('[data-status="first"]');

  if (firstGroup == null) {
    previousGroup.setAttribute("data-status", "unknown");
    currentGroup.setAttribute("data-status", "previous");
    nextGroupBefore.setAttribute("data-status", "active");
  }

  const nextGroupAfter = document.querySelector('[data-status="active"]');

  if (nextGroupAfter != null) {
    var indexOfGroupAfter =
      parseInt(nextGroupAfter.getAttribute("data-index")) + 1;
  } else {
    var firstNextGroup = document.querySelector('[data-status="next"]');
    var indexOfGroupAfter =
      parseInt(firstNextGroup.getAttribute("data-index")) + 1;
  }

  const becomeNext = document.querySelector(
    `[data-index="${indexOfGroupAfter}"]`
  );

  if (indexOfGroupAfter < totalGroups.length) {
    becomeNext.setAttribute("data-status", "next");
  }

  if (indexOfGroupAfter == totalGroups.length) {
    nextGroupBefore.setAttribute("data-status", "last");
  }

  if (firstGroup != null) {
    nextGroupBefore.setAttribute("data-status", "active");
    firstGroup.setAttribute("data-status", "previous");
  }
};

export default handleRight;
