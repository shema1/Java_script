const sortContacts = (contacts, param) => {
    if (!Array.isArray(contacts)) {
        return null;
    }
    const result = contacts;
    if (!param) {
        result.sort((a, b) => {
            return b.name.localeCompare(a.name)
        });
    }
    result.sort((a, b) => {
        return a.name.localeCompare(b.name)
    });

    return result;
}