const SERVER_ENDPOINT = "http://localhost:9000"

export const getMemberInfo = (memberId: String) => {
  return fetch(`${SERVER_ENDPOINT}/members/${memberId}`)
}
