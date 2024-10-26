import { BASE_HEADERS } from '$lib/constants/root';
import { err, ok, Result } from 'neverthrow';
import crypto from 'crypto';

export const isLoggedInWithCookies = (token?: string, secretKey?: string) => {
	if (!token || !secretKey) {
		return false;
	}
	const decryptedToken = decryptFromCookieFormat(token, secretKey);
	return decryptedToken.isOk();
};

export const createHeaders = (additionalHeaders: Record<string, string> = {}) => {
	return {
		...BASE_HEADERS,
		...additionalHeaders
	};
};

export const decryptFromCookieFormat = (
	cookieValue: string,
	secretKey: string
): Result<string, string> => {
	try {
		const { encryptedToken, iv } = JSON.parse(cookieValue);
		const decryptedToken = decryptToken(encryptedToken, secretKey, iv);
		return ok(decryptedToken);
	} catch (error) {
		console.error('Error decrypting token:', error);
		return err('Failed to decrypt token');
	}
};

export const decryptToken = (encryptedToken: string, secretKey: string, iv: string) => {
	const algorithm = 'aes-256-cbc';
	const key = crypto.scryptSync(secretKey, 'salt', 32);

	const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, 'hex'));
	let decrypted = decipher.update(encryptedToken, 'hex', 'utf8');
	decrypted += decipher.final('utf8');

	return decrypted;
};

export const encryptAndFormatForCookie = (token: string, secretKey: string): string => {
	const { encryptedToken, iv } = encryptToken(token, secretKey);
	return JSON.stringify({ encryptedToken, iv });
};


export const encryptToken = (token: string, secretKey: string) => {
	const algorithm = 'aes-256-cbc';
	const key = crypto.scryptSync(secretKey, 'salt', 32);
	const iv = crypto.randomBytes(16);

	const cipher = crypto.createCipheriv(algorithm, key, iv);
	let encrypted = cipher.update(token, 'utf8', 'hex');
	encrypted += cipher.final('hex');

	return {
		encryptedToken: encrypted,
		iv: iv.toString('hex')
	};
};





