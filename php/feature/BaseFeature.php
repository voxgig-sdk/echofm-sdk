<?php
declare(strict_types=1);

// Echofm SDK base feature

class EchofmBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(EchofmContext $ctx, array $options): void {}
    public function PostConstruct(EchofmContext $ctx): void {}
    public function PostConstructEntity(EchofmContext $ctx): void {}
    public function SetData(EchofmContext $ctx): void {}
    public function GetData(EchofmContext $ctx): void {}
    public function GetMatch(EchofmContext $ctx): void {}
    public function SetMatch(EchofmContext $ctx): void {}
    public function PrePoint(EchofmContext $ctx): void {}
    public function PreSpec(EchofmContext $ctx): void {}
    public function PreRequest(EchofmContext $ctx): void {}
    public function PreResponse(EchofmContext $ctx): void {}
    public function PreResult(EchofmContext $ctx): void {}
    public function PreDone(EchofmContext $ctx): void {}
    public function PreUnexpected(EchofmContext $ctx): void {}
}
