# Giải thích cấu trúc Storybook

```
project-root/
├── .storybook/               # Cấu hình Storybook
│   ├── main.ts               # config đường dẫn, addons
│   ├── preview.ts            # config UI preview, decorator
│   └── tsconfig.json
├── src/                      # Code gốc của bạn
│   └── shared/components/    # Component gốc của bạn
│       └── ui/
│           ├── Button.tsx
│           └── Button.stories.js
```