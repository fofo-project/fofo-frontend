export const Fomatter = {
	PhoneNumber(phoneNumber: string): string | null {
		if (!phoneNumber) return phoneNumber;

		// Remove all non-numeric characters
		const cleaned = phoneNumber.replace(/\D/g, "");

		// Apply formatting based on length
		if (cleaned.length <= 4) {
			return cleaned.replace(/(\d{3})(\d{1})?/, "$1-$2");
		} else if (cleaned.length <= 5) {
			return cleaned.replace(/(\d{3})(\d{2})?/, "$1-$2");
		} else if (cleaned.length <= 8) {
			return cleaned.replace(/(\d{3})(\d{4})?/, "$1-$2");
		} else {
			return cleaned
				.replace(/(\d{3})(\d{4})(\d{4})?/, "$1-$2-$3")
				.slice(0, 13);
		}
	},
};