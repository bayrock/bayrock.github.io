function stripHTML(s: string) { return (s ?? "").replace(/<\/?[^>]+(>|$)/g, ""); }

export default stripHTML;
