const handleLeft = () => {
  const previousGroupBefore = document.querySelector(
    '[data-status="previous"]'
  );
  const currentGroup = document.querySelector('[data-status="active"]');
  const nextGroup = document.querySelector('[data-status="next"]');
  const lastGroup = document.querySelector('[data-status="last"]');

  if (lastGroup == null) {
    previousGroupBefore.setAttribute("data-status", "active");
    currentGroup.setAttribute("data-status", "next");
    nextGroup.setAttribute("data-status", "unknown");
  }

  const previousGroupAfter = document.querySelector('[data-status="active"]');

  if (previousGroupAfter != null) {
    var indexOfGroupAfter =
      parseInt(previousGroupAfter.getAttribute("data-index")) - 1;
  } else {
    var lastPreviousGroup = document.querySelector('[data-status="previous"]');
    var indexOfGroupAfter =
      parseInt(lastPreviousGroup.getAttribute("data-index")) - 1;
  }

  const becomePrevious = document.querySelector(
    `[data-index="${indexOfGroupAfter}"]`
  );

  if (indexOfGroupAfter >= 0) {
    becomePrevious.setAttribute("data-status", "previous");
  } else {
    previousGroupBefore.setAttribute("data-status", "first");
  }

  if (lastGroup != null) {
    previousGroupBefore.setAttribute("data-status", "active");
    lastGroup.setAttribute("data-status", "next");
  }
};

export default handleLeft;
