function stripHTML(str) { return (str ?? "").replace(/<\/?[^>]+(>|$)/g, ""); }

export default stripHTML;
