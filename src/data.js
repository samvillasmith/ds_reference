export const sections = [
  {
    id: 'crash-course',
    label: 'Start Here',
    title: 'Crash Course',
    desc: 'New to data science? A complete overview of the lifecycle — from defining a problem to deploying a model.',
    gridClass: 'grid-2',
    cards: [
      {
        tag: 'Crash Course', tagClass: 'tag-cc',
        title: 'The Data Science Lifecycle',
        desc: 'Seven stages from problem definition to deployment. The end-to-end map before you get into the territory.',
        href: '/crash-course.html', arrow: '→ read',
        spanFull: true,
      },
    ],
  },
  {
    id: 'foundations',
    label: 'Mathematics & Theory',
    title: 'The Foundations',
    desc: 'The math behind every algorithm. No hand-waving — every formula derived step by step with worked examples.',
    gridClass: 'grid-2',
    cards: [
      {
        tag: 'Math', tagClass: 'tag-math',
        title: 'Multiple Linear Regression',
        desc: 'Gradient descent, step by step. Simple regression first, then adding features — same algorithm, one more θ to update.',
        href: '/math/linear_regression.html', arrow: '→ read',
      },
      {
        tag: 'Math', tagClass: 'tag-math',
        title: 'Ordinary Least Squares',
        desc: 'The closed-form solution. Assumptions, diagnostics, strengths, limitations — and when to use it vs gradient descent.',
        href: '/math/ols.html', arrow: '→ read',
      },
      {
        tag: 'Math', tagClass: 'tag-math',
        title: 'R² and Adjusted R²',
        desc: 'How good is your line? SS_total vs SS_res, what R² actually measures, and why Adjusted R² exists.',
        href: '/math/R_R_squared.html', arrow: '→ read',
      },
      {
        tag: 'Math', tagClass: 'tag-math',
        title: 'MSE, MAE & RMSE',
        desc: 'Three error metrics, three personalities. When to use which — and why raw errors cancel to zero.',
        href: '/math/mse_mae_rmse.html', arrow: '→ read',
      },
      {
        tag: 'Math', tagClass: 'tag-math',
        title: 'Underfitting & Overfitting',
        desc: 'The bias-variance tradeoff visualized. Too simple, too complex, and the sweet spot of generalization.',
        href: '/math/overfitting_underfitting.html', arrow: '→ read',
        spanFull: true,
      },
    ],
  },
  {
    id: 'feature-eng',
    label: 'Applied Techniques',
    title: 'Feature Engineering',
    desc: 'Preparing data for models. Every notebook runs end-to-end with real datasets and includes a conclusion with practical guidance.',
    gridClass: 'grid-2',
    cards: [
      {
        tag: 'Feature Eng', tagClass: 'tag-fe',
        title: 'Handling Missing Values',
        desc: 'MCAR, MAR, MNAR. Mean, median, mode imputation — and when to drop vs fill. Titanic dataset walkthrough.',
        href: 'feature_engineering/handling-missing-values.ipynb', arrow: '→ notebook',
      },
      {
        tag: 'Feature Eng', tagClass: 'tag-fe',
        title: 'Outlier Detection',
        desc: 'IQR method and the 5-number summary. Box plots for visual detection. When to remove, cap, or investigate.',
        href: 'feature_engineering/outliers.ipynb', arrow: '→ notebook',
      },
      {
        tag: 'Feature Eng', tagClass: 'tag-fe',
        title: 'Data Encoding',
        desc: 'One-Hot, Label, and Ordinal Encoding. Sparse vs dense. When each method helps or hurts your model.',
        href: 'feature_engineering/data-encoding.ipynb', arrow: '→ notebook',
      },
      {
        tag: 'Feature Eng', tagClass: 'tag-fe',
        title: 'Target Guided Ordinal Encoding',
        desc: 'Encoding high-cardinality categoricals using target means. One column, maximum signal — but watch for leakage.',
        href: 'feature_engineering/target-guided-ordina-encoding.ipynb', arrow: '→ notebook',
      },
      {
        tag: 'Feature Eng', tagClass: 'tag-fe',
        title: 'Handling Imbalanced Datasets',
        desc: 'Upsampling, downsampling, and SMOTE. Synthetic minority samples that fill the feature space naturally.',
        href: 'feature_engineering/handling-imbalanced-datasets.ipynb', arrow: '→ notebook',
        spanFull: true,
      },
    ],
  },
  {
    id: 'reference',
    label: 'Quick Reference',
    title: 'Reference Guides',
    desc: 'Bookmark these. Every formula, every metric, every distribution — on a single page.',
    gridClass: 'grid-2',
    cards: [
      {
        tag: 'Reference', tagClass: 'tag-ref',
        title: 'Formula Cheat Sheet',
        desc: '13 sections from descriptive stats through bias-variance. Every formula you need on one page with sticky navigation.',
        href: '/math/formulas.html', arrow: '→ open',
      },
      {
        tag: 'Stats', tagClass: 'tag-stats',
        title: 'Statistics & Probability Compendium',
        desc: 'The comprehensive reference. Every distribution, every test, every theorem — with formulas, intuition, and when to use each.',
        href: '/math/stats.html', arrow: '→ open',
      },
    ],
  },
];
