FROM node:7.7.3-onbuild
ARG GIT_COMMIT
ENV GIT_COMMIT ${GIT_COMMIT}
HEALTHCHECK --interval=1m --timeout=3s --retries=3 CMD curl --fail http://localhost:8000/health || exit 1
