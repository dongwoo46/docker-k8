## 실습내용

### 쿠버네티스 값을 컨테이너로 전달할 환경변수와 값 참조 경로

- POD_NAME: metadata.name
- NAMESPACE_NAME: metadata.namespace
- POD_IP: status.podIP
- NODE_IP: status.hostIP
- NODE_NAME: spec.nodeName

### Pod 템플릿 선언 시 컨테이너로 전달할 환경변수와 값

- STUDENT_NAME: 본인이름
- GREETING: STUDENT_NAME을 참조한 인삿말

- Pod API 버전: v1
- Pod 이름: hello-app
- Pod 네임스페이스: default
- 컨테이너 이름/포트: hello-app(8080)
- 도커 이미지: yoonjeong/hello-app:1.0
- 환경변수:
- -- POD_NAME(metadata.name), POD_IP(status.podIP)
- -- NAMESPACE_NAME(metadata.namespace)
- -- NODE_NAME(spec.nodeName), NODE_IP(status.hostIP)
- -- STUDENT_NAME(본인이름), GREETING
  (STUDENT_NAME을 참조한 인삿말)