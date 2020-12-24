import {
  DefinitionsHealthcheck,
  DefinitionsService,
  ListOfStrings,
  ListOrDict,
} from "./compose.schema";

import { DefinitionToImplementionType, Scope } from "./tardigrade";

type BuildType = NonNullable<Exclude<DefinitionsService["build"], string>>;

class BuildService
  extends Scope<BuildType>
  implements DefinitionToImplementionType<BuildType, BuildService> {
  constructor(ctx: string) {
    super();
    this.props.context = ctx;
  }

  args(args: ListOrDict): BuildService {
    this.props.args = args;
    return this;
  }

  cacheFrom(caches: ListOfStrings): BuildService {
    this.props.cache_from = caches;
    return this;
  }

  context(ctx: string): BuildService {
    this.props.context = ctx;
    return this;
  }

  dockerfile(ctx: string): BuildService {
    this.props.context = ctx;
    return this;
  }

  extraHosts(hosts: ListOrDict): BuildService {
    this.props.extra_hosts = hosts;
    return this;
  }

  isolation(technology: string): BuildService {
    this.props.isolation = technology;
    return this;
  }

  labels(labelKeyValue: ListOrDict): BuildService {
    this.props.labels = labelKeyValue;
    return this;
  }

  network(host: string): BuildService {
    this.props.network = host;
    return this;
  }

  shmSize(size: string | number): BuildService {
    this.props.shm_size = size;
    return this;
  }

  target(stage: string): BuildService {
    this.props.target = stage;
    return this;
  }

  create(): BuildType {
    return this.props;
  }
}

type DefinitionServiceConfig = Exclude<
  NonNullable<DefinitionsService["configs"]>[0],
  string
>;

type ServiceConfigsType = {
  [K in keyof DefinitionServiceConfig]: DefinitionServiceConfig[K];
};
class ServiceConfig
  extends Scope<ServiceConfigsType>
  implements DefinitionToImplementionType<ServiceConfigsType, ServiceConfig> {
  constructor() {
    super();
  }

  gid(id: string): ServiceConfig {
    this.props.gid = id;
    return this;
  }

  mode(mode: number): ServiceConfig {
    this.props.mode = mode;
    return this;
  }

  uid(id: string): ServiceConfig {
    this.props.uid = id;
    return this;
  }

  source(src: string): ServiceConfig {
    this.props.source = src;
    return this;
  }

  target(target: string): ServiceConfig {
    this.props.target = target;
    return this;
  }
}

type ServiceDefinition = NonNullable<DefinitionsService>;

class Service
  extends Scope<ServiceDefinition>
  implements DefinitionToImplementionType<ServiceDefinition, Service> {
  constructor() {
    super();
  }

  build(object: string | BuildType): Service {
    this.props.build = object;
    return this;
  }

  capAdd(capabilities: string[]): Service {
    this.props.cap_add = capabilities;
    return this;
  }

  capDrop(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  command(cmd: string | string[]): Service {
    this.props.command = cmd;
    return this;
  }

  blkioConfig(
    blkioConfig: NonNullable<DefinitionsService["blkio_config"]>
  ): Service {
    this.props.blkio_config = blkioConfig;
    return this;
  }

  cgroupParent(parent: string): Service {
    this.props.cgroup_parent = parent;
    return this;
  }

  configs(config: (string | ServiceConfigsType)[]): Service {
    this.props.configs = config;
    return this;
  }

  containerName(name: string): Service {
    this.props.container_name = name;
    return this;
  }

  cpuCount(count: number): Service {
    this.props.cpu_count = count;
    return this;
  }

  cpuPercent(percentage: number): Service {
    this.props.cpu_percent = percentage;
    return this;
  }

  cpuPeriod(period: string | number): Service {
    this.props.cpu_period = period;
    return this;
  }

  cpuQuota(quota: string | number): Service {
    this.props.cpu_quota = quota;
    return this;
  }

  cpuRtPeriod(rtPeriod: string | number): Service {
    this.props.cpu_rt_period = rtPeriod;
    return this;
  }

  cpuRtRuntime(rtRuntime: string | number): Service {
    this.props.cpu_rt_runtime = rtRuntime;
    return this;
  }

  cpuShares(share: string | number): Service {
    this.props.cpu_shares = share;
    return this;
  }

  // @deprecated
  cpus(vcpu: string | number): Service {
    this.props.cpus = vcpu;
    return this;
  }

  cpuset(cpuNumber: string): Service {
    this.props.cpuset = cpuNumber;
    return this;
  }

  credentialSpec(
    spec: NonNullable<DefinitionsService["credential_spec"]>
  ): Service {
    this.props.credential_spec = spec;
    return this;
  }

  dependsOn(services: NonNullable<DefinitionsService["depends_on"]>): Service {
    this.props.depends_on = services;
    return this;
  }

  deploy(deployConfig: NonNullable<DefinitionsService["deploy"]>): Service {
    this.props.deploy = deployConfig;
    return this;
  }

  deviceCgroupRules(rules: string[]): Service {
    this.props.device_cgroup_rules = rules;
    return this;
  }

  devices(customDevices: string[]): Service {
    this.props.devices = customDevices;
    return this;
  }

  dns(customDns: string | string[]): Service {
    this.props.dns = customDns;
    return this;
  }

  dnsOpt(customDns: string[]): Service {
    this.props.dns_opt = customDns;
    return this;
  }

  dnsSearch(domains: string | string[]): Service {
    this.props.dns_search = domains;
    return this;
  }

  domainname(name: string): Service {
    this.props.domainname = name;
    return this;
  }

  entrypoint(paths: string | string[]): Service {
    this.props.entrypoint = paths;
    return this;
  }

  envFile(paths: string | string[]): Service {
    this.props.env_file = paths;
    return this;
  }

  environment(
    envKeyValues: NonNullable<DefinitionsService["environment"]>
  ): Service {
    this.props.environment = envKeyValues;
    return this;
  }

  expose(ports: (string | number)[]): Service {
    this.props.expose = ports;
    return this;
  }

  extends(
    anotherServices: NonNullable<DefinitionsService["extends"]>
  ): Service {
    this.props.extends = anotherServices;
    return this;
  }

  externalLinks(links: string[]): Service {
    this.props.external_links = links;
    return this;
  }

  extraHosts(hosts: NonNullable<DefinitionsService["extra_hosts"]>): Service {
    this.props.extra_hosts = hosts;
    return this;
  }

  groupAdd(groupName: (string | number)[]): Service {
    this.props.group_add = groupName;
    return this;
  }

  healthcheck(healthCheckDefinition: DefinitionsHealthcheck): Service {
    this.props.healthcheck = healthCheckDefinition;
    return this;
  }

  hostname(name: string): Service {
    this.props.hostname = name;
    return this;
  }

  image(imageName: string): Service {
    this.props.image = imageName;
    return this;
  }

  init(enable: boolean): Service {
    this.props.init = enable;
    return this;
  }

  ipc(mode: string): Service {
    this.props.ipc = mode;
    return this;
  }

  isolation(_isolation: string): Service {
    this.props.isolation = _isolation;
    return this;
  }

  labels(_labels: NonNullable<DefinitionsService["labels"]>): Service {
    this.props.labels = _labels;
    return this;
  }

  links(_links: string[]): Service {
    this.props.links = _links;
    return this;
  }

  logging(loggingConfig: NonNullable<DefinitionsService["logging"]>): Service {
    this.props.logging = loggingConfig;
    return this;
  }

  macAddress(address: string): Service {
    this.props.mac_address = address;
    return this;
  }

  memLimit(limit: string | number): Service {
    this.props.mem_limit = limit;
    return this;
  }

  memReservation(reservation: number | string): Service {
    this.props.mem_reservation = reservation;
    return this;
  }

  memSwappiness(swappiness: number): Service {
    this.props.mem_swappiness = swappiness;
    return this;
  }

  memswapLimit(limit: string | number): Service {
    this.props.memswap_limit = limit;
    return this;
  }

  networkMode(mode: string): Service {
    this.props.network_mode = mode;
    return this;
  }

  networks(_networks: DefinitionsService["networks"]): Service {
    this.props.networks = _networks;
    return this;
  }

  oomKillDisable(isDisable: boolean): Service {
    this.props.oom_kill_disable = isDisable;
    return this;
  }

  oomScoreAdj(adjustment: number): Service {
    this.props.oom_score_adj = adjustment;
    return this;
  }

  pid(_pid: string): Service {
    this.props.pid = _pid;
    return this;
  }

  pidsLimit(limit: string | number): Service {
    this.props.pids_limit = limit;
    return this;
  }

  platform(_platform: string): Service {
    this.props.platform = _platform;
    return this;
  }

  ports(ports: DefinitionsService["ports"]): Service {
    this.props.ports = ports;
    return this;
  }

  privileged(isPrivileged: boolean): Service {
    this.props.privileged = isPrivileged;
    return this;
  }

  profiles(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  pullPolicy(policy: DefinitionsService["pull_policy"]): Service {
    this.props.pull_policy = policy;
    return this;
  }

  readOnly(isReadOnly: boolean): Service {
    this.props.read_only = isReadOnly;
    return this;
  }

  restart(restartOpts: string): Service {
    this.props.restart = restartOpts;
    return this;
  }

  runtime(runtimeName: string): Service {
    this.props.runtime = runtimeName;
    return this;
  }

  scale(scaleNumber: number): Service {
    this.props.scale = scaleNumber;
    return this;
  }

  secrets(secret: NonNullable<DefinitionsService["secrets"]>): Service {
    this.props.secrets = secret;
    return this;
  }

  securityOpt(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  shmSize(size: string | number): Service {
    this.props.shm_size = size;
    return this;
  }

  stdinOpen(useStdin: boolean): Service {
    this.props.stdin_open = useStdin;
    return this;
  }

  stopGracePeriod(period: string): Service {
    this.props.stop_grace_period = period;
    return this;
  }

  stopSignal(signal: string): Service {
    this.props.stop_signal = signal;
    return this;
  }

  sysctls(kernelParams: NonNullable<DefinitionsService["sysctls"]>): Service {
    this.props.sysctls = kernelParams;
    return this;
  }

  tmpfs(paths: string | string[]): Service {
    this.props.tmpfs = paths;
    return this;
  }

  tty(useTTY: boolean): Service {
    this.props.tty = useTTY;
    return this;
  }

  ulimits(limit: NonNullable<DefinitionsService["ulimits"]>): Service {
    this.props.ulimits = limit;
    return this;
  }

  user(user: string): Service {
    this.props.user = user;
    return this;
  }

  usernsMode(mode: string): Service {
    this.props.userns_mode = mode;
    return this;
  }

  volumes(volumeSpec: NonNullable<DefinitionsService["volumes"]>): Service {
    this.props.volumes = volumeSpec;
    return this;
  }

  volumesFrom(capabilities: string[]): Service {
    this.props.cap_drop = capabilities;
    return this;
  }

  workingDir(dir: string): Service {
    this.props.working_dir = dir;
    return this;
  }
}

export default Service;
