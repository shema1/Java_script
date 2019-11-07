const sortContacts = contacts => {
    if (!Array.isArray(contacts)) {
        return null;
    }
    const result = contacts
        .sort((a, b) => {
            return b.name.localeCompare(a.name)
        });

    return result;
}