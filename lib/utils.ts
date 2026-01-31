export const formatDate = (isoString: string) => {
    const date = new Date(isoString);

    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    }).format(date);
};
