const ADDRESS_REGEXP = /^0x[a-f0-9]{40}$/;

export function isValid(address: String) {
    const matches = address.match(ADDRESS_REGEXP);
    return !!matches;
}
