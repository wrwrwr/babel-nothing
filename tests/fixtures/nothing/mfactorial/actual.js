function mfactorial(n, degree) {
	var result = n;
	while (n > degree) {
		result *= n -= degree;
	}
	return result;
}
