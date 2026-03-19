export const highlightText = (text: string, em: string[] | undefined) => {
  if (!em?.length) return text;

  const pattern = new RegExp(
    `(${em.map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g",
  );

  const splitText = text.split(pattern);

  return splitText.map((element, index) =>
    em.includes(element) ? <strong key={index}>{element}</strong> : element,
  );
};
