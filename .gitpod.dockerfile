FROM gitpod/workspace-full-vnc

# Install Electron dependencies
RUN apt-get update \
 && apt-get install -y libnss3-dev \
 && apt-get clean && rm -rf /var/cache/apt/* && rm -rf /var/lib/apt/lists/* && rm -rf /tmp/*
